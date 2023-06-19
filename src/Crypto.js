import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export const Crypto = () => {
  const chartRef = useRef(null);
  const svgContainer = useRef(null);

  // State to track width and height of SVG Container
  const [widthh, setWidth] = useState();
  const [heightt, setHeight] = useState();

  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth;
    setWidth(newWidth);

    const newHeight = svgContainer.current.clientHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    // detect 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, []);

  useEffect(() => {

    const margin = { top: 50, right: 100, bottom: 50, left: 50 };
    const width = widthh - margin.left - margin.right;
    const height = heightt - margin.top - margin.bottom;


    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

      d3.selectAll('.area').remove();
      
    const parseDate = d3.utcParse("%s");

    d3.json(
      "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30"
    )
      .then((data) => {
        const ohlcData = data.map((d) => {
          return {
            date: parseDate(d[0] / 1000),
            open: d[1],
            high: d[2],
            low: d[3],
            close: d[4],
          };
        });

  
        const x = d3
          .scaleUtc()
          .domain(d3.extent(ohlcData, (d) => d.date))
          .range([0, width]); 
  
        const y = d3
          .scaleLinear()
          .domain([
            d3.min(ohlcData, (d) => d.close) * 0.99,
            d3.max(ohlcData, (d) => d.close) * 1.01,
          ])
          .range([height, 0]);
  
        const xAxis = d3
          .axisBottom(x)
          .ticks(d3.utcDay.every(3))
          .tickFormat(d3.utcFormat('%d %b'))
          .tickSize(-height );
  
        svg
          .append('g')
          .attr('id', 'xAxis')
          .attr('transform', `translate(0, ${height })`)
          .call(xAxis)
          .style("color", "white")
          .style("font-family", "Inter")
          .style("font-size", "14px")
  
        const yAxis = d3.axisRight(y).tickSize(-width );
  
        svg
          .append('g')
          .attr('id', 'yAxis')
          .attr('transform', `translate(${width}, 0)`)
          .call(yAxis)
          .style("color", "white")
          .style("font-family", "Inter")
          .style("font-size", "14px");
  
          svg
          .append('path')
          .data([ohlcData])
          .style('fill', 'none')
          .attr('class', 'line')
          .attr('id', 'priceChartline')
          .attr('stroke', '#724FE5')
          .attr('stroke-width', '3')
          .attr('d', d3.line()
              .x(d => { return x(d.date)})
              .y(d => {return y(d.close)})
          );

          svg.append('path')
              .data([ohlcData])
              .attr('id', 'priceChart')
              .attr('fill', '#724FE5')
              .attr('fill-opacity', 0.15)
              .attr('d', d3.area()
                  .x(function(d) { return x(d.date); })
                  .y0(y(d3.min(ohlcData, d => d.close)*0.99)) 
                  .y1(function(d) { return y(d.close); })
              )
              

              //render tooltip
              const toolTipRight = svg.append("g")
              .attr("class", "toolTipRight")

              const toolTipRect = toolTipRight
                  .append("rect")
                  .attr("width", 70)
                  .attr("height", 30)
                  .attr("fill", "#42E8E0")
                  .style("color", "red")
                  .text("mofamlsf")

              const toolTipBottom = svg
                .append("g")
                .attr("class", "toolTipBottom")

               const toolTipRect2 = toolTipBottom
               .append("rect")
              .attr("width", 100)
                  .attr("height", 30)
                  .attr("fill", "#42E8E0")
                  .text("mofamlsf")
              
              //render crosshair
            const focus = svg
            .append('g')
            .attr('class', 'focus')
            .style('display', 'none');



          focus.append('circle').attr('r', 5).attr("fill", "#42E8E0");
          focus.append('line').classed('x', true);
          focus.append('line').classed('y', true);


          const generateCrosshair = (svgX) => {
            const date = x.invert(svgX);

            const bisect = d3.bisector((d) => d.date).left;
            const i = bisect(ohlcData, date, 1);
            const d0 = ohlcData[i - 1];
            const d1 = ohlcData[i];
            const d = date - d0.date > d1.date - date ? d1 : d0;

            const focusX = x(d.date);
            const focusY = y(d.close);

            toolTipRect.text(d.close + "€")
            toolTipRect.attr("transform", `translate(${width}, ${focusY - 15})`)

            toolTipRect2.attr("transform", `translate(${focusX - 50}, ${height})`)


            focus.attr('transform', `translate(${focusX},${focusY})`);

            focus.select('.x').attr('x1', -focusX).attr('x2', width - focusX);
            focus.select('.y').attr('y1', -focusY).attr('y2', height - focusY);
    };

        svg
        .append('rect')
        .attr('class', 'overlay')
        .attr('fill', 'none')
        .attr('cursor', 'crosshair')
        .attr('pointer-events', 'all')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover', () => {
          focus.style('display', null);
          toolTipRect.style("display", null)
          toolTipRect2.style("display", null)
        })
        .on('mouseout', () => {
          focus.style('display', 'none')
          toolTipRect.style("display", "none")
          toolTipRect2.style("display", "none")
        })
        .on('mousemove', (event) => {
          const [mouseX] = d3.pointer(event);
          const svgX = mouseX;
          generateCrosshair(svgX);
        });
          
        d3.select('.overlay').style('pointer-events', 'all');
        d3.selectAll('.focus line').style('fill', 'none');
        d3.selectAll('.focus line').style('stroke', '#42E8E0').style("opacity", "0.7");
        d3.selectAll('.focus line').style('stroke-width', '1px');
        d3.selectAll('.focus line').style('stroke-dasharray', '3 3 ');
        


      })
      .catch((error) => {
        console.error(error);
      });
  }, [widthh, heightt]);

  return (
    <div className="w-screen flex justify-center pb-48 bg-black">
      <div  ref={svgContainer} className="line-chart sm:w-[70%] sm:h-[600px]">
        <svg ref={chartRef} className="mt-14"></svg>
      </div>
    </div>
    
    
  );
};