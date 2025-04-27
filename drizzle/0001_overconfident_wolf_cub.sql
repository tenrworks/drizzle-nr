ALTER TABLE "users" RENAME COLUMN "name" TO "first_name";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "birthday" SET NOT NULL;--> statement-breakpoint
UPDATE "users" SET "birthday" = '2000-01-01' WHERE "birthday" IS NULL;
ALTER TABLE "users" ADD COLUMN "last_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" text NOT NULL;