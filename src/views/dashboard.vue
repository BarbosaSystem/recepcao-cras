<template>
    <div class="cabecalho">
      <h1 class="h2">{{ $route.meta.title }}</h1>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body d-flex justify-content-center flex-column text-center">
              <h5 class="card-title mb-5">Últimos 7 dias</h5>
              <canvas ref="chart1" style="height: 300px;"></canvas> <!-- Altura fixa definida -->
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Gráfico de Vendas por Categoria</h5>
              <canvas ref="chart2" style="height: 300px;"></canvas> <!-- Altura fixa definida -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.renderCharts();
    },
    methods: {
      renderCharts() {
        // Dados para o primeiro gráfico (exemplo)
        const data1 = {
          labels: ['Atend. CadÚnico', 'Atend. Técnico', 'Atend. CEJUSC', 'Outros'],
          datasets: [{
            label: 'Vendas Mensais',
            backgroundColor: '#42A5F5',
            data: [40, 30, 50, 35]
          }]
        };
  
        // Dados para o segundo gráfico (exemplo)
        const data2 = {
          labels: ['Eletrônicos', 'Roupas', 'Alimentos', 'Livros', 'Outros'],
          datasets: [{
            label: 'Vendas por Categoria',
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#4BC0C0'],
            data: [300, 180, 450, 200, 100]
          }]
        };
  
        // Renderização do primeiro gráfico
        const ctx1 = this.$refs.chart1.getContext('2d');
        new Chart(ctx1, {
          type: 'bar',
          data: data1,
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
  
        // Renderização do segundo gráfico
        const ctx2 = this.$refs.chart2.getContext('2d');
        new Chart(ctx2, {
          type: 'pie',
          data: data2,
          options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  padding: 20,
                  boxWidth: 15
                }
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                  }
                }
              }
            }
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  .card {
    margin-top: 20px;
  }
  </style>
  