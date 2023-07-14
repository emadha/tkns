"use client"

import ModulePage from "@/components/ModulePage";
import TextArea from "@/components/Form/TextArea";
import React from "react";
import {metadata} from "@/app/ext/character_count/metadata";

export default function CharacterCount() {
    return <ModulePage title={metadata.title} description={metadata.description}>
        <TextArea label={'Data Here'}
                  label_description={'Enter data to count text here...'}>
        </TextArea>
    </ModulePage>
}