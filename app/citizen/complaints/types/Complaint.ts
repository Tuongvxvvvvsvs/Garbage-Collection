export type ComplaintStatus = "pending" | "resolved" | "rejected";
export type ComplaintPriority = "low" | "medium" | "high";

export type Complaint = {
  id: string;
  title: string;
  description: string;
  date?: string;
  status: ComplaintStatus;
  createdAt: string;
  priority: ComplaintPriority;
  customerName?: string;
};
export type ComplaintItemProps = {
  complaint: Complaint;
  showCustomer: boolean;
  showActions: boolean;
  expandable?: boolean;
};

