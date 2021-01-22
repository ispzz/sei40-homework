class Artist < ApplicationRecord
  has_many :songs

#FREE association (no extra _id is reuired):
#an artist has many albums, VIA the songs table, ie.:
# to find the albums for an artist, first find all the
# songs with this artist's ID as their artist_id of those songs
# This is a 'through' association - use an in-between model to get to a more remote one

  has_many :albums, through: 'songs'

  has_many :genres, through: 'songs'
end
