import { Suspense } from "react";
import { Card } from "./cards";
import { hearts, spades, clubs, diamonds, etc } from "./data";
import { GameView } from "./game";

export const metadata = {
  title: "Explore",
  description: "Explorer Genesis",
};

export default function ExplorePage() {
  return (
    <Suspense>
      <GameView />
      <div>
        <h1 className="my-3 text-3xl">Hearts</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-3">
          {hearts.map((item) => {
            return (
              <div key={item.name}>
                <p className="text-sm font-bold">{item.name}</p>
                <Card name="Test 1" assets={item.assets} scale={1.5} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="my-3 text-3xl">Spades</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-3">
          {spades.map((item) => {
            return (
              <div key={item.name}>
                <p className="text-sm font-bold">{item.name}</p>
                <Card name="Test 1" assets={item.assets} scale={1.5} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="my-3 text-3xl">Diamonds</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-3">
          {diamonds.map((item) => {
            return (
              <div key={item.name}>
                <p className="text-sm font-bold">{item.name}</p>
                <Card name="Test 1" assets={item.assets} scale={1.5} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="my-3 text-3xl">Clubs</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-3">
          {clubs.map((item) => {
            return (
              <div key={item.name}>
                <p className="text-sm font-bold">{item.name}</p>
                <Card name="Test 1" assets={item.assets} scale={1.5} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="my-3 text-3xl">ETC</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-3">
          {etc.map((item) => {
            return (
              <div key={item.name}>
                <p className="text-sm font-bold">{item.name}</p>
                <Card name="Test 1" assets={item.assets} scale={1.5} />
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
