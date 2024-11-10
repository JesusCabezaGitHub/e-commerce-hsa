import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private readonly ERROR_ADD_ITEM_TO_LOCAL_STORE = 'Error al agregar ítem a localStorage:';
  private readonly ERROR_REMOVE_ITEM_TO_LOCAL_STORE = 'Error al eliminar ítem de localStorage:';
  private readonly ERROR_REMOVE_CLEAN_TO_LOCAL_STORE = 'Error al limpiar ítems en localStorage:';
  private readonly ERROR_GET_ITEM_TO_LOCAL_STORE = 'Error al obtener ítems de localStorage:';

  constructor() {}

  addItem<T>(key: string, item: T): void {
    try {
      const items = this.getItems<T>(key);
      items.push(item);
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error(this.ERROR_ADD_ITEM_TO_LOCAL_STORE, error);
    }
  }

  removeItem<T>(key: string, predicate: (item: T) => boolean): void {
    try {
      let items = this.getItems<T>(key);
      items = items.filter((item) => !predicate(item));
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error(this.ERROR_REMOVE_ITEM_TO_LOCAL_STORE, error);
    }
  }

  clearItems(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(this.ERROR_REMOVE_CLEAN_TO_LOCAL_STORE, error);
    }
  }

  getItems<T>(key: string): T[] {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error(this.ERROR_GET_ITEM_TO_LOCAL_STORE, error);
      return [];
    }
  }
}
