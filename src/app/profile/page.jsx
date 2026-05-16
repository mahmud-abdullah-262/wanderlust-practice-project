'use client'
import { Camera, MapPin, Pencil, PencilToSquare } from '@gravity-ui/icons';

import Image from 'next/image';
import React, { useState } from 'react'; 
import { toast } from 'react-toastify';
import { useSession } from '../lib/auth-client';

const MyProfilePage = () => {
  const { data: session, refetch } = useSession();
  const user = session?.user;

  // Static fallback data
  const profile = {
    name: user?.name || "Sarah Mitchell",
    email: user?.email || "sarah.mitchell@example.com",
    image: user?.image || "https://i.pravatar.cc/150?img=47",
    location: "San Francisco, CA",
    memberSince: "Mar 2024",
    nationality: "United States",
    emailVerified: user?.emailVerified ?? true,
  };

  const stats = [
    { label: "Total Bookings",    value: "12",     icon: "ti-plane",          bg: "#E6F1FB", color: "#185FA5" },
    { label: "Countries Visited", value: "18",     icon: "ti-world",          bg: "#EAF3DE", color: "#3B6D11" },
    { label: "Upcoming Trips",    value: "2",      icon: "ti-trending-up",    bg: "#FAEEDA", color: "#854F0B" },
    { label: "Total Spent",       value: "$15,750",icon: "ti-currency-dollar", bg: "#EEEDFE", color: "#534AB7" },
  ];

  const [name, setName] = useState(profile.name);
  const [image, setImage] = useState(profile.image);

  const handleSubmit = async () => {
    await fetch("/api/update-profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image }),
    });
    await refetch();
    document.getElementById("my_modal_5").close();
    toast.success("Profile edited successfully!");
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      {/* Header */}
      <h1 className="text-2xl font-medium mb-1">My Profile</h1>
      <p className="text-sm text-gray-500 mb-6">
        Manage your account settings and travel preferences
      </p>

      {/* Main Card */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col md:flex-row">

        {/* Left Panel */}
        <div className="md:w-56 flex flex-col items-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
          {/* Avatar */}
          <div className="relative mb-3">
            <Image
              src={profile.image}
              width={88}
              height={88}
              alt={profile.name}
              className="w-22 h-22 rounded-full object-cover object-center border-2 border-gray-200"
            />
            <button className="absolute bottom-0.5 right-0.5 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center border-2 border-white">
              <Camera size={11} className="text-white" />
            </button>
          </div>

          <p className="text-base font-medium text-gray-900">{profile.name}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5 mb-4">
            <MapPin size={12} /> {profile.location}
          </p>

          {/* Meta */}
          <div className="w-full border-t border-gray-200 pt-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Member since</span>
              <span className="font-medium text-gray-800">{profile.memberSince}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Nationality</span>
              <span className="font-medium text-gray-800">{profile.nationality}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Pencil size={14} /> Edit Profile
          </button>
        </div>

        {/* Right Panel — Statistics */}
        <div className="flex-1 p-6">
          <p className="text-base font-medium text-gray-900 mb-4">Travel Statistics</p>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-medium text-gray-900">{stat.value}</p>
                </div>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: stat.bg, color: stat.color }}
                >
                  <i className={`ti ${stat.icon} text-lg`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-medium mb-4">Edit Profile</h3>
          <div className="modal-action">
            <div className="w-full space-y-3">
              <div>
                <label className="label text-sm">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="New Name"
                  defaultValue={profile.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="label text-sm">Image URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="New Image URL"
                  defaultValue={profile.image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={handleSubmit} className="btn btn-neutral flex-1">
                  Update
                </button>
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="btn btn-ghost flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyProfilePage;

