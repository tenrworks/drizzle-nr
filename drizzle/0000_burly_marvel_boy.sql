CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"image" text,
	"sizing" text,
	"gender" text,
	"role" text DEFAULT 'user',
	"hometown" text,
	"birthday" date,
	"sports_played" text,
	"sports_wish" text,
	"recess_favorite" text
);
