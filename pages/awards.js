import React from "react";
import Layout from "../components/Layout";
import db from "../utils/db";
import AwardsData from "../models/award";

const Awards = (props) => {
    const {award} =props
  return (
    <Layout>
      <h1 className="md:text-5xl py-12 font-bold text-center">Awards</h1>
      <main className="grid gap-8 md:grid-cols-6">
        {award.map((item) => {
          return (
            <div key={item._id} className="rounded shadow-xl">
              <div className="overflow-hidden h-56 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full px-2"
                />
              </div>
              <h1 className="bg-white p-4 font-serif text-2xl">{item.name}</h1>
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default Awards;

export async function getServerSideProps() {
    await db.connect();
    const awards = await AwardsData.find({}).sort({ updatedAt: -1 }).lean();
    await db.disconnect();
    return {
      props: {
        award: JSON.parse(JSON.stringify(awards.map(db.convertDocToObj))),
      },
    };
  }