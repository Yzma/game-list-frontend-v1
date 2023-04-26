// import React, { useEffect } from "react";
// import { useAppSelector } from "../../app/hooks";
// import { useSelector } from "react-redux";
// import { RootState } from "../../app/store";
import { Layout } from "antd";

import FiltersWrapper from "../FiltersWrapper/FiltersWrapper";

const Hero: React.FC = () => {
	return (
		<Layout>
			<FiltersWrapper></FiltersWrapper>
		</Layout>
	);
};

export default Hero;
