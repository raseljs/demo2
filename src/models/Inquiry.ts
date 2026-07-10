import { Schema, model, models } from "mongoose";

const InquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "", trim: true },
    service: { type: String, default: "", trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ["new", "replied", "archived"], default: "new" }
  },
  { timestamps: true }
);

export const InquiryModel = models.Inquiry || model("Inquiry", InquirySchema);
