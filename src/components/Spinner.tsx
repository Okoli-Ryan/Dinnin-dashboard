import { Spin } from "antd";
import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin className="!text-primary" />;

export default function Spinner() {
	return <Spin indicator={antIcon} />;
}
