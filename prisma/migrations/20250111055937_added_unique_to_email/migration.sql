/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contribution` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contribution_email_key" ON "Contribution"("email");
