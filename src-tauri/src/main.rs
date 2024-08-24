// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::path::desktop_dir;
use std::fs::File;
use std::io::Write;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
fn create_file_on_desktop(filename: &str, content: &str) -> Result<(), String> {
    if let Some(desktop) = desktop_dir() {
        let file_path = desktop.join(filename);
        let mut file = File::create(file_path).map_err(|e| e.to_string())?;
        file.write_all(content.as_bytes()).map_err(|e| e.to_string())?;
        Ok(())
    } else {
        Err("No se pudo encontrar el directorio del escritorio".into())
    }
}

fn main() {
    tauri::Builder::default()
        
        .invoke_handler(tauri::generate_handler![create_file_on_desktop])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
