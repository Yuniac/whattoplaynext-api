import { SteamController } from "@modules/steam/steam.controller";
import { SteamService } from "@modules/steam/steam.service";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController, SteamController],
  providers: [AppService, SteamService],
})
export class AppModule {}
