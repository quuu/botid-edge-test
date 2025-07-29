import { initBotId } from "botid/client/core";

initBotId({
  protect: [
    {
      path: "/api/post-data",
      method: "POST",
    },
  ],
});
