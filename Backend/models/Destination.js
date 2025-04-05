import mongoose from "mongoose";
import slugify from "slugify"; // For SEO-friendly slugs

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/400x300?text=No+Image", // Placeholder if missing
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Prevent negative prices
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        rating: { type: Number, min: 0, max: 5 },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Automatically generate slug before saving
destinationSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});

export const Destination = mongoose.model("Destination", destinationSchema);
