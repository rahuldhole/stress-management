import { Injectable } from '@angular/core';

declare var db: any;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagenames = "stress-management";

  constructor() { }

  add(key: string, value: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await db.transaction([this.storagenames], "readwrite")
        .objectStore(this.storagenames).put(value, key);
        request.onsuccess = function () {
          if (request.result !== value) {
            console.log("Value added");
          }
        };
        request.onerror = function () {
          console.log("Error adding value");
        }
        resolve(request);
      } catch (error) {
        reject(error);
      }
    });
    

  }

  get(key: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await db.transaction([this.storagenames], "readwrite")
        .objectStore(this.storagenames).get(key);
        request.onsuccess = function () {
          if (request.result !== undefined) {
            console.log("Value retrieved");
          }
        };
        request.onerror = function () {
          console.log("Error retrieving value");
        }
        resolve(request);
      } catch (error) {
        reject(error);
      }
    });
  }

  remove(key: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const request = await db.transaction([this.storagenames], "readwrite")
        .objectStore(this.storagenames).delete(key);
        request.onsuccess = function () {
          if (request.result !== undefined) {
            console.log("Value deleted");
          }
        };
        request.onerror = function () {
          console.log("Error deleting value");
        }
        resolve(request);
      } catch (error) {
        reject(error);
      }
    });
  }
}
