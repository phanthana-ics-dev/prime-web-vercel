// src/app/permissions.ts

export type Permission = {
    roles: string[]; // กลุ่มของผู้ใช้ที่มีสิทธิ์เข้าถึง
    actions?: string[]; // สิทธิ์เฉพาะ เช่น view, edit, delete
  };
  
  export const pagePermissions: Record<string, Permission> = {
    '/dashboard': {
      roles: ['admin', 'manager'], // เฉพาะ admin และ manager ที่เข้าได้
    },
    '/settings': {
      roles: ['admin'], // เฉพาะ admin ที่เข้าได้
    },
    '/profile': {
      roles: ['admin', 'manager', 'user'], // ผู้ใช้ทุกกลุ่มเข้าได้
      actions: ['view', 'edit'], // อาจใช้กรณีตรวจสิทธิ์เพิ่มเติม
    },
  };
  