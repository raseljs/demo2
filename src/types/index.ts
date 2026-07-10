export type Project = {
  _id?: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  year?: string;
  imageUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  published?: boolean;
  createdAt?: string;
};

export type Post = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  readingTime?: string;
  coverImage?: string;
  published?: boolean;
  publishedAt?: string;
  createdAt?: string;
};

export type Inquiry = {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status?: "new" | "replied" | "archived";
  createdAt?: string;
};
