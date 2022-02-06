import { Roles } from 'src/app/models/Roles';

export function isPermitedHighAccess(currentRole: string) {
    if(currentRole === Roles.ADMIN || currentRole === Roles.GUEST)
      return true;
    
    return false;
  }

export function isPermitedLowAccess(currentRole: string) {
    if(currentRole === Roles.ADMIN)
      return true;
    
    return false;
  }