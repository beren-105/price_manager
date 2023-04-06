import React, { useCallback } from "react";
import { useEffect, useState } from "react"
import { PieChart, Pie, Sector } from "recharts";



export default function MarkerTotalChart({ highest }) {
    const [data, setData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
  
    useEffect(() => {
        setData([{
            name: '전통시장',
            점수: highest.traditionScore
        },
        {
            name: '대형마트',
            점수: highest.markerScore
        }
        ])
    }, [highest])
    console.log(data)

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          percent,
          value
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >{`점수 ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="#999"
            >
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };

    return (
        <div className="border rounded-xl py-8 max-w-6xl mx-auto mb-8">
            <div className="flex flex-col items-center justify-around mb-4 xl:flex-row">
                <div className="text-center mb-4">
                    <p>전통시장 수</p>
                    <h3 className="text-3xl font-bold">{highest.traditionCount}개</h3>
                </div>
                <div className="text-center mb-4">
                    <p>대형마트 수</p>
                    <h3 className="text-3xl font-bold">{highest.markerCount}개</h3>
                </div>
                <div>
                <PieChart width={450} height={200}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={225}
                    // cy={}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#a855f7"
                    dataKey="점수"
                    onMouseEnter={onPieEnter}
                />
                </PieChart>
                </div>
            </div>
            <div className="text-center">
                <p>
                    현재{" "}
                    <span className="text-purple-500 font-bold">
                        {highest.itemIsEpure}
                    </span>
                    개의 품목 중 평균가가 더 낮은 곳은{" "}
                    <span className="text-purple-500 font-bold">
                        {highest.traditionScore > highest.markerScore ? '전통시장' : '대형마트'}
                    </span>
                    입니다.
                </p>
            </div>
        </div>
    )
}