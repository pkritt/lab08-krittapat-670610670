// src/libs/types.ts

// Sidebar
export interface SidebarProps {
  username: string;
  type: string;
}

// Task
export interface TaskProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

// Footer
export interface FooterProps {
  year: number;
  fullName: string;
  studentId: string;
}
 
