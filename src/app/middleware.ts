// ถ้าไม่ใช้ SERVER SIDE จะไม่เข้า MIDDLEWARE นี้

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pagePermissions } from './utils/permissions';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ตรวจสอบว่าหน้าปัจจุบันมีการกำหนดสิทธิ์ไว้หรือไม่
  const permission = pagePermissions[pathname];
  if (!permission) {
    return NextResponse.next(); // หน้าที่ไม่มีการกำหนดสิทธิ์สามารถเข้าถึงได้
  }

  // ดึงข้อมูล user จาก JWT Token
  const token = req.cookies.get('authToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect ไปหน้า login ถ้าไม่มี token
  }

  try {
    const user = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    const userRole = user.role; // เช่น user.role = 'manager'

    // ตรวจสอบว่าสิทธิ์ของผู้ใช้ตรงกับ roles ที่กำหนดไว้หรือไม่
    if (!permission.roles.includes(userRole)) {
      return NextResponse.redirect(new URL('/403', req.url)); // Redirect ไปหน้า 403 (Access Denied)
    }

    // ถ้าผ่านการตรวจสอบให้โหลดหน้าต่อได้
    return NextResponse.next(); 
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect ไปหน้า login กรณี token ผิดพลาด
  }
}

export const config = {
  matcher: ['/dashboard', '/settings', '/profile'], // หน้าที่ต้องตรวจสอบสิทธิ์
};
