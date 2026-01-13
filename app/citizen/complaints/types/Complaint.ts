export type ComplaintStatus =
  | "pending"
  | "resolved"
  | "rejected"
  | "investigating"
  | "escalated";

export type ComplaintPriority = "low" | "medium" | "high" | "urgent";

export type ComplaintCategory = "product" | "service" | "delivery" | "payment";

export type ComplaintVariant =
  | "default"
  | "glassmorphism"
  | "neon"
  | "minimal"
  | "vibrant";

export type Complaint = {
  id: string;
  title: string;
  description: string;

  createdAt: string; // hiển thị thời gian
  date?: string; // optional nếu API khác format

  status: ComplaintStatus;
  priority: ComplaintPriority;

  category?: ComplaintCategory;
  variant?: ComplaintVariant;

  customerName?: string;
  assignee?: string;

  comments?: number;
  views?: number;
};

export type ComplaintItemProps = {
  complaint: Complaint;
  showCustomer: boolean;
  showActions: boolean;
  expandable?: boolean;
  variant?: ComplaintVariant; // override nếu muốn
};
