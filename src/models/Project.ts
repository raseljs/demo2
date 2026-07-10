import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    excerpt: { type: String, required: true, trim: true },
    year: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const ProjectModel = models.Project || model("Project", ProjectSchema);
