import StatsBarprogres from "./StatsBarprogres";

const Statsbar = ({stats}) => {
  return (
    <section >
        <h2 className="statsbar_title">Stats</h2>
        <div className="bars">
            {
                stats?.map((stat) => <StatsBarprogres stat={stat} key={stat.name} /> )
            }
        </div>
    </section>
  )
};
export default Statsbar;
