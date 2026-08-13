import { Bot, BookCopy, BookOpen, CalendarClock, CalendarDays, ClipboardList, FileArchive, FileQuestion, Files, GraduationCap, Home, Settings, UserRound } from 'lucide-react';
import type { NavigationItem } from '../types/app';

export const navigationItems: NavigationItem[] = [
{ label: 'Tổng quan', path: '/', icon: Home, description: 'Bảng điều khiển tổng hợp' },
{ label: 'Hồ sơ cá nhân', path: '/profile', icon: UserRound, description: 'Thông tin giáo viên' },
{ label: 'Kế hoạch giáo dục', path: '/education-plans', icon: ClipboardList, description: 'Kế hoạch năm học' },
{ label: 'Kế hoạch bài dạy', path: '/lesson-plans', icon: BookOpen, description: 'Giáo án và bài dạy' },
{ label: 'Bài giảng', path: '/lectures', icon: GraduationCap, description: 'Tài liệu trình chiếu' },
{ label: 'Tư liệu & Biểu mẫu', path: '/resources', icon: FileArchive, description: 'Kho biểu mẫu dùng chung' },
{ label: 'Hồ sơ khác', path: '/records', icon: Files, description: 'Hồ sơ nghiệp vụ khác' },
{ label: 'Thời khóa biểu', path: '/timetable', icon: CalendarDays, description: 'Lịch dạy hằng tuần' },
{ label: 'Lịch công tác', path: '/work-calendar', icon: CalendarClock, description: 'Công việc nhà trường' },
{ label: 'Ngân hàng câu hỏi', path: '/question-bank', icon: FileQuestion, description: 'Câu hỏi kiểm tra' },
{ label: 'Tạo đề', path: '/exam-builder', icon: BookCopy, description: 'Công cụ tạo đề' },
{ label: 'AI Assistant', path: '/ai-assistant', icon: Bot, description: 'Trợ lý tương lai' },
{ label: 'Cài đặt', path: '/settings', icon: Settings, description: 'Tùy chỉnh ứng dụng' },
];
