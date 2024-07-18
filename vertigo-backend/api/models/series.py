import sqlalchemy as sqla
from sqlalchemy import orm as sqla_orm
from datetime  import datetime, timezone
from slugify import slugify

from api.models.issue import Issue

from flask import current_app, url_for

from api.app import db
from api.helpers.thumbnail_processing import save_series_thumbnail
from api.models.updatable import Updateable
import api.models.associations as associations
import api.models.series_entities as entities
class Series(Updateable, db.Model):
    __tablename__ = 'series'

    id = sqla.Column(sqla.Integer, primary_key=True)
    title = sqla.Column(sqla.String(280), nullable=False)

    publisher = sqla_orm.relationship('Publisher', secondary=associations.series_publisher,
                                   back_populates='series', lazy='dynamic')
    
    
    genre = sqla_orm.relationship('Genre', secondary=associations.series_genre, 
                                  back_populates='series', lazy='dynamic')
    
    main_char_id = sqla.Column(sqla.Integer)
    main_char_type = sqla.Column(sqla.String(50))

    writer = sqla_orm.relationship('Writer', secondary=associations.series_writer,
                                   back_populates='series', lazy='dynamic')
    
    artist = sqla_orm.relationship('Artist', secondary=associations.series_artist,
                                   back_populates='series', lazy='dynamic')

    inker = sqla_orm.relationship('Inker', secondary=associations.series_inker,
                                   back_populates='series', lazy='dynamic')

    penciller = sqla_orm.relationship('Penciller', secondary=associations.series_penciller,
                                   back_populates='series', lazy='dynamic')
    
    colorist = sqla_orm.relationship('Colorist', secondary=associations.series_colorist,
                                   back_populates='series', lazy='dynamic')
    
    letterer = sqla_orm.relationship('Letterer', secondary=associations.series_letterer,
                                   back_populates='series', lazy='dynamic')

    character = sqla_orm.relationship('Character', secondary=associations.series_character,
                                   back_populates='series', lazy='dynamic')

    team = sqla_orm.relationship('Team', secondary=associations.series_team,
                                   back_populates='series', lazy='dynamic')

    user_rating = sqla.Column(sqla.Float)

    editor = sqla_orm.relationship('Editor', secondary=associations.series_editor,
                                   back_populates='series', lazy='dynamic')
    
    description = sqla.Column(sqla.String(1250))

    issue = sqla_orm.relationship('Issue', back_populates='series',
                                  lazy='noload', cascade='all, delete-orphan')
    
    manga = sqla.Column(sqla.Integer)
    release_date = sqla.Column(sqla.DateTime)

    series_format = sqla.Column(sqla.String(100))
    issue_count = sqla.Column(sqla.Integer)

    read_count = sqla.Column(sqla.Integer)
    have_count = sqla.Column(sqla.Integer)

    dominant_color = sqla.Column(sqla.String(280))
    slug = sqla.Column(sqla.String(280))
    thumbnail = sqla.Column(sqla.String(280))
    
    timestamp = sqla.Column(sqla.DateTime, index=True, default=lambda: datetime.now(timezone.utc), nullable=False)

    user_id = sqla.Column(sqla.Integer, sqla.ForeignKey("users.id"), index=True)

    user = sqla_orm.relationship('User', back_populates='series')

    def issue_select(self):
        return Issue.select().where(sqla_orm.with_parent(self, Series.issue))

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            kwargs['slug'] = slugify(kwargs.get('title', ''))

            url = kwargs.get('thumbnail', '')

        thumbnail_filename, dominant_color = save_series_thumbnail(url, kwargs['title'])
        kwargs['dominant_color'] = dominant_color
        kwargs['thumbnail'] = thumbnail_filename
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return '<Series {}>'.format(self.title, self.thumbnail, self.slug)

    @property
    def url(self):
        return url_for('series.get', id=self.id)

    @property
    def main_char(self):
        if self.main_char_type == 'character':
            return db.session.query(entities.Character).get(self.main_char_id)
        elif self.main_char_type == 'team':
            return db.session.query(entities.Team).get(self.main_char_id)
        return None

