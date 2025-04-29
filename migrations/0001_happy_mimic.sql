DROP TABLE "account" CASCADE;--> statement-breakpoint
DROP TABLE "session" CASCADE;--> statement-breakpoint
DROP TABLE "verification" CASCADE;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "image";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "first_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "last_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "username";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "sizing";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "gender";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "role";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "hometown";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "birthday";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "sports_played";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "sports_wish";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "recess_favorite";