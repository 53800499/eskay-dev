/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";

export default function FooterContainer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="space-y-11 pb-11 bg-gray-100 dark:bg-gray-600">
      <div className="flex items-center justify-center gap-1">
        <Typography variant="body3" theme="gray" className="text-center">
          {`Copy @ ${currentYear} | Propulsed by `}{" "}
          <a href="#" className="underline">
            Eskay_dev
          </a>{" "}
          {` - Sikirou BASSIROU`}
        </Typography>
      </div>
    </Container>
  );
}
