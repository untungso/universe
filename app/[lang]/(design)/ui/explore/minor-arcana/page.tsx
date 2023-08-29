import { Card } from "@/playground/minor-arcana/cards";
import {
  hearts,
  spades,
  clubs,
  diamonds,
  etc,
} from "@/playground/minor-arcana/data";

export default function MinorArcanaPage() {
  return (
    <>
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
    </>
  );
}
