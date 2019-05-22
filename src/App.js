import React from 'react';
import './App.css';
import logo from "./logo.png";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './React-table.css'
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'

function download(){
  const input = document.getElementById('invoice');

  html2canvas(input,{
    scale:2
  })
  .then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
  });
}
function pdf(){
  var doc = new jsPDF();
  var elementHandler = {
    '#ignorePDF': function (element, renderer) {
      return true;
    }
  };
  var source = window.document.getElementById("invoice");
  doc.fromHTML(document.body,function(){
    doc.output("dataurlnewwindow");
  });

}
function App() {
  const data = [
    {
      "number":"1",
      "name":"Software development service (January - 2019)",
      "quantity":"20",
      "unitPrice":"68,965",
      "unitTotal":"1.379,31",
      "unitTotalAmerican":1379.31

    },
    {
      "number":"2",
      "name":"Software development service (February - 2019)",
      "quantity":"10",
      "unitPrice":"68,965",
      "unitTotal":"689,65",
      "unitTotalAmerican":689.65
    },
    {
      "number":"3",
      "name":"Software development (March - 2019)",
      "quantity":"2.5",
      "unitPrice":"68,965",
      "unitTotal":"172,41",
      "unitTotalAmerican":172.41

    },
    {
      "number":"4",
      "name":"Software development (April - 2019)",
      "quantity":"5",
      "unitPrice":"68,965",
      "unitTotal":"344,83",
      "unitTotalAmerican":344.83
    }
  ];

  const columns = [
    {
      Header: '#',
      accessor: 'number',
      width:30
    },
    {
      Header: 'Item Description',
      accessor: 'name',
      width:300,
      headerClassName: 'sds'
    },
    {
      Header: 'Quantity (days)',
      accessor: 'quantity' // String-based value accessors!
    },
    {
      Header: 'Unit price (€)',
      accessor: 'unitPrice' // String-based value accessors!
    },
    {
      Header: 'Total (€)',
      accessor: 'unitTotal' // String-based value accessors!
    },
    ]
  return (
    <div className="App">
      <div className="invoice" id="invoice">
        <div className="header">

          <div className="headerRow">

            <div className="logoArea">
              <img src={logo} alt="Nodeport logo" className="logo"/>
              <div>
                <div className="companyName">Nodeport S.A. de C.V.</div>
                <div className="companyData">
                  <p>Calle 12 Norte #286-7</p>
                  <p>Playa de Chapultepec</p>
                  <p>Ensenada, Baja California</p>
                  <p>22785, Mexico.</p>
                  <p>RFC: NOD190221USA</p>
                  <p>Title Deed: 50,469</p>
                  <p>Volume: 1,826</p>
                  <p>FME: N-2019017871</p>
                  <p>FCI: 201900056016</p>
                  <p>Registro Público de la Propiedad y de</p>
                  <p>Comercio del Estado de Baja California</p>
                </div>
              </div>
            </div>
            <div className="detailsArea">
              <div className="detailsTitle">
                INVOICE
              </div>
              <div className="detail">
                20-05-2019
              </div>
              <div className="detail">
                Invoice #0001
              </div>
              <div className="detail">
                Invoice to: European Institute for Participatory Media e.V.
              </div>
              <div className="detail">
              Pariser Platz 6
              </div>
              <div className="detail">
              10117 Berlin
              </div>
              <div className="detail">
              Germany

              </div>

            </div>
          </div>
          <div className="headerRow">

          </div>

        </div>
        <div className="content">
          <ReactTable
              data={data}
              columns={columns}
              showPagination={false}
              contentEditable
              headerStyle={{}}
              defaultPageSize={4}
              getTrProps={(state, rowInfo, column) => {
                console.log(rowInfo);
                return {

                  style: {
                    background: rowInfo.index % 2  ? '#F5F5F5':"white"
                  }
                }
              }}
            />
            <br></br>
          <div className="extraInfo">
            <div className="title">
              Subtotal
            </div>
            <div className="value">
              2.586,20 €
            </div>
          </div>
          <div className="extraInfo">
            <div className="title">
              IVA (16%)
            </div>
            <div className="value">
              413,80 €
            </div>
          </div>
          <div className="extraInfo total">
            <div className="title">
              Total
            </div>
            <div className="value">
              3.000,00 €
            </div>
          </div>
        </div>
        <div className="footerNotes">
          <div className="footerNoteTitle">
            PAYMENT METHOD
          </div>
          <div className="footerNoteSubTitle">
            TransferWise
          </div>
          <div className="footerNoteContent">
            Nodeport S.A. de C.V.
            <br></br>CLABE: 01 2022 0011 2996 1891
            <br></br>Bank: BBVA Bancomer
          </div>
        </div>
        <div className="footer">
          <div>
            Nodeport S.A. de C.V.
          </div>
          <div>
            +52 1 646 978 2454
          </div>

          <div>
            contact@nodeport.co
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
