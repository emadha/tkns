"use client"

import ModulePage from "@/components/ModulePage";
import {Metadata} from "next";
import TextArea from "@/components/Form/TextArea";
import React from "react";

export const metadata: Metadata = {
    title: "Text Length Calculator",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
}
export default function CharacterCount() {
    return <ModulePage title={metadata.title} description={metadata.description}>
        <TextArea label={'Data Here'}
                  label_description={'Enter data to count text here...'}>
        </TextArea>
    </ModulePage>
}