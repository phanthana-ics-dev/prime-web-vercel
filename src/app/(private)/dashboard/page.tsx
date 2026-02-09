'use client';

import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import withAuth from "../../hoc/withAuth";

interface Item {
    name: string;
    type: "folder" | "file";
    children?: Item[]; // `children` จะมีเฉพาะเมื่อ `type` เป็น `folder`
}


function DashboardPage() {
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

    const items: Item[] = [
        {
            name: "CT_CUSTOM",
            type: "folder",
            children: [
                { name: "Child 1", type: "file" },
                { name: "Child 2", type: "file" },
            ],
        },
        {
            name: "RK_RISK",
            type: "folder",
            children: [
                { name: "Subfolder", type: "folder", children: [{ name: "Nested File", type: "file" }] },
            ],
        },
        { name: "Versions File Flight Slot", type: "file" },
        { name: "Airport_ShortName", type: "file" },
    ];

    const toggleFolder = (name: string) => {
        setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const renderItems = (items: Item[], depth: number = 0) => (
        <List className="rounded-md" style={{ marginLeft: depth * 20, position: "relative" }}>
            {items.map((item, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                        {/* เส้นเชื่อม */}
                        {depth > 0 && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: -10,
                                    top: 0,
                                    bottom: 0,
                                    borderLeft: "1px solid #ccc",
                                    height: "100%",
                                }}
                            ></div>
                        )}
                        <ListItem
                            onClick={() => item.type === "folder" && toggleFolder(item.name)}
                            component="div"
                            style={{ position: "relative", zIndex: 1, cursor: 'pointer' }}
                        >
                            <ListItemIcon>
                                {item.type === "folder" ? (
                                    <FolderIcon className="text-blue-500" />
                                ) : (
                                    <InsertDriveFileIcon className="text-gray-500" />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                            {item.type === "folder" && (openFolders[item.name] ? <ExpandLess /> : <ExpandMore />)}
                        </ListItem>
                    </div>
                    {item.type === "folder" && (
                        <Collapse in={openFolders[item.name]} timeout="auto" unmountOnExit>
                            {renderItems(item.children || [], depth + 1)}
                        </Collapse>
                    )}
                </div>
            ))}
        </List>
    );

    return (
        <div>
            <div className="grid grid-cols-12 grid-rows-1 gap-2">
                <div className="col-span-2 border border-gray-300">
                    {renderItems(items)}
                </div>
                <div className="col-span-10 border border-gray-300"> {renderItems(items)}</div>
            </div>
        </div>
    );
}

export default withAuth(DashboardPage)

