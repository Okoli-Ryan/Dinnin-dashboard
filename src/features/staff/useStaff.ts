import React from "react";
import { useNavigate } from "react-router-dom";

export default function useStaff() {
  const navigate = useNavigate();

  function onViewAdminPermissions(id: string) {
    navigate(`/staff/permissions/${id}`);
  }

  return { onViewAdminPermissions };
}
