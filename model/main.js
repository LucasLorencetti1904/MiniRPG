import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

async function addMobsTable(name, health, damage) {
    const db = await open({
        filename: 'miniRpg.db',
        driver: sqlite3.Database,   
    });

    db.run(
        'CREATE TABLE IF NOT EXISTS mobs (id INTEGER PRIMARY KEY, name TEXT, health INTEGER, damage INTEGER)'
    );
}

addMobsTable();