package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Collection struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Name      string             `bson:"name"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
}