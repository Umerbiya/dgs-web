"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
});

export default function InteractiveMap() {
    const [mounted, setMounted] = useState(false);

    // Wait until mounted to render the map to avoid SSR mismatch issues with Leaflet
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-full h-full bg-charcoal animate-pulse rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#4065a9] animate-bounce" />
            </div>
        );
    }

    // Coordinates for Gotera-Pepsi, Addis Ababa
    const position: [number, number] = [8.980831398078088, 38.756354355961214];

    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden z-0">
            <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}
                className="z-0"
            >
                {/* 
                  Using standard OpenStreetMap tiles. 
                  In dark mode, the .map-tiles class will be inverted via globals.css 
                */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="map-tiles"
                />

                <Marker position={position} icon={icon}>
                    <Popup className="custom-popup">
                        <div className="text-center">
                            <h4 className="font-bold text-sm text-[#4065a9]">DAN GTS HQ</h4>
                            <p className="text-xs text-gray-600 mt-1">Gotera-Pepsi, Addis Ababa</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Optional Overlay MapPin requested by user */}
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-lg shadow-lg z-[400] flex items-center gap-2 border border-asphalt">
                <MapPin className="w-4 h-4 text-[#4065a9]" />
                <span className="text-xs font-semibold text-foreground">DANGTS Import Export</span>
            </div>
        </div>
    );
}
