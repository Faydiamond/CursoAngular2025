import { CanActivateFn } from '@angular/router';

export const validatorGuard: CanActivateFn = (route, state) => {
  console.log("Verificando acceso " , route,state);

  return true;
};
