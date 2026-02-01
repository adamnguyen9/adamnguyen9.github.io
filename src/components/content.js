import React from "react";
import { Header } from "./header";
import { AboutMeSection } from "./aboutMe";
import { EducationSection } from "./education";
import { HobbySection } from "./hobbies";
import { ContactMeSection } from "./contactMe";
import { Chatbot } from "./chatbot";

export function Content() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  return (
    isChatOpen ? (
        <div>
            <Header setIsChatOpen={setIsChatOpen} />
            <Chatbot />
        </div>
    ) : (
      <div className="area">
        <Header setIsChatOpen={setIsChatOpen} />
        <AboutMeSection />

        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>

        <HobbySection />
        <EducationSection />
        <ContactMeSection />
      </div>
    )
  );
}
