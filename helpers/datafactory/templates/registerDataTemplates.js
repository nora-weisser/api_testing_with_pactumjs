import { registerAuthTemplates } from "./auth.js";
import { registerRoomTemplates } from "./randomRoom.js";

export function registerAllDataTemplates() {
    registerAuthTemplates();
    registerRoomTemplates();
  }