export const bar_per = {
  color: [],
  legend: {
    show: true
  },
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach(v => {
        str = str + `${v.marker}${v.seriesName}：${(v.value[v.seriesName] * 100).toFixed(2) + '%'}<br>`;
      });
      return str;
    }
  },
  xAxis: {
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    },
    axisLabel: { interval: 0 }
  },
  yAxis: {
    splitLine: {
      show: true
    },
    axisLabel: {
      formatter: value => (value * 100).toFixed(0) + '%'
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    }
  }
};

export const bar_num = {
  color: [],
  legend: {
    show: true
  },
  grid: {
    top: '13%'
  },
  xAxis: {
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    },
    axisLabel: { interval: 0 }
  },
  yAxis: {
    splitLine: {
      show: true
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    }
  }
};

export const line_per = {
  color: [],
  legend: {
    show: true
  },
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach(v => {
        str =
          str +
          `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
            v.color.colorStops
              ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
              : v.color
          }"></span>${v.seriesName}：${
            v.value[v.seriesName] ? (v.value[v.seriesName] * 100).toFixed(2) + '%' : '0%'
          }<br>`;
      });
      return str;
    }
  },
  xAxis: {
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    },
    axisLabel: { interval: 0 }
  },
  yAxis: {
    splitLine: {
      show: true
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    },
    axisLabel: {
      formatter: value => (value * 100).toFixed(0) + '%'
    }
  }
};

export const pie_per = {
  title: {},
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `${params.name}:${(params.value * 100).toFixed(2)}%`;
    }
  },
  label: {
    formatter: function (params) {
      return `${params.name}:${(params.value * 100).toFixed(2)}%`;
    }
  },
  legend: {
    show: false
  },
  series: []
};
