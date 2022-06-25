import { Controller, Get } from "@nestjs/common";
import { SteamService } from "./steam.service";

@Controller("/")
export class SteamController {
  constructor(private readonly steamService: SteamService) {}

  @Get("test")
  test() {
    return this.steamService.test();
  }

  @Get("home")
  home() {
    const x = "yxz";
    return "welcome, steam user!";
  }
}
