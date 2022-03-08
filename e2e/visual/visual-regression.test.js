import { toMatchImageSnapshot } from "jest-image-snapshot";
// import Sitemapper from "sitemapper";
expect.extend({ toMatchImageSnapshot });

export function getConfig(customSnapshotIdentifier, customSnapshotsDir) {
  return {
    customSnapshotIdentifier,
    customSnapshotsDir,
  };
}

describe("site", () => {
  // const sitemapper = new Sitemapper();

  beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
  });

  it("shold match Legends", async () => {
    const url = "/family/legends/";
    await page.goto(`${URL}${url}`, {
      waitUntil: "domcontentloaded",
    });
    const config = getConfig("legends", "e2e/visual/__image_snapshots__/family/");
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot(config);
  });

  // it("Should match all screenshots from sitemap", async () => {
  //   const sitemap = await sitemapper.fetch(`${URL}/sitemap.xml`);
  //   for (const url of sitemap.sites) {
  //     const path =
  //       url
  //         .replace(/^https?:\/\/([\w\d]+\.)?\w+\.\w+\/?/, "")
  //         .replace(/\/$/, "")
  //         .replace(/\//, "---") + ".png";
  //     const config = getConfig(path, "__image_snapshots__/");
  //     await page.goto(url, { waitUntil: "domcontentloaded" });
  //     const image = await page.screenshot({ fullPage: true });
  //     expect(image).toMatchImageSnapshot(config);
  //   }
  // });
});
