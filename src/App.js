import React, { useState, Component } from "react";
import JSONPretty from "react-json-pretty";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Select from "react-select";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

function App() {
  // Set Selected Value Mahasiswa 1
  const [mhs1penilaian1, setMhs1penilaian1] = useState();
  const [mhs1penilaian2, setMhs1penilaian2] = useState();
  const [mhs1penilaian3, setMhs1penilaian3] = useState();
  const [mhs1penilaian4, setMhs1penilaian4] = useState();

  // Set Selected Value Mahasiswa 2
  const [mhs2penilaian1, setMhs2penilaian1] = useState();
  const [mhs2penilaian2, setMhs2penilaian2] = useState();
  const [mhs2penilaian3, setMhs2penilaian3] = useState();
  const [mhs2penilaian4, setMhs2penilaian4] = useState();

  // Set Selected Value Mahasiswa 3
  const [mhs3penilaian1, setMhs3penilaian1] = useState();
  const [mhs3penilaian2, setMhs3penilaian2] = useState();
  const [mhs3penilaian3, setMhs3penilaian3] = useState();
  const [mhs3penilaian4, setMhs3penilaian4] = useState();

  // Set Selected Value Mahasiswa 4
  const [mhs4penilaian1, setMhs4penilaian1] = useState();
  const [mhs4penilaian2, setMhs4penilaian2] = useState();
  const [mhs4penilaian3, setMhs4penilaian3] = useState();
  const [mhs4penilaian4, setMhs4penilaian4] = useState();

  // Set Selected Value Mahasiswa 5
  const [mhs5penilaian1, setMhs5penilaian1] = useState();
  const [mhs5penilaian2, setMhs5penilaian2] = useState();
  const [mhs5penilaian3, setMhs5penilaian3] = useState();
  const [mhs5penilaian4, setMhs5penilaian4] = useState();

  // Set Selected Value Mahasiswa 6
  const [mhs6penilaian1, setMhs6penilaian1] = useState();
  const [mhs6penilaian2, setMhs6penilaian2] = useState();
  const [mhs6penilaian3, setMhs6penilaian3] = useState();
  const [mhs6penilaian4, setMhs6penilaian4] = useState();

  // Set Selected Value Mahasiswa 7
  const [mhs7penilaian1, setMhs7penilaian1] = useState();
  const [mhs7penilaian2, setMhs7penilaian2] = useState();
  const [mhs7penilaian3, setMhs7penilaian3] = useState();
  const [mhs7penilaian4, setMhs7penilaian4] = useState();

  // Set Selected Value Mahasiswa 8
  const [mhs8penilaian1, setMhs8penilaian1] = useState();
  const [mhs8penilaian2, setMhs8penilaian2] = useState();
  const [mhs8penilaian3, setMhs8penilaian3] = useState();
  const [mhs8penilaian4, setMhs8penilaian4] = useState();

  // Set Selected Value Mahasiswa 9
  const [mhs9penilaian1, setMhs9penilaian1] = useState();
  const [mhs9penilaian2, setMhs9penilaian2] = useState();
  const [mhs9penilaian3, setMhs9penilaian3] = useState();
  const [mhs9penilaian4, setMhs9penilaian4] = useState();

  // Set Selected Value Mahasiswa 10
  const [mhs10penilaian1, setMhs10penilaian1] = useState();
  const [mhs10penilaian2, setMhs10penilaian2] = useState();
  const [mhs10penilaian3, setMhs10penilaian3] = useState();
  const [mhs10penilaian4, setMhs10penilaian4] = useState();

  let datapenilaian = {
    data: {
      aspek_penilaian_1: {
        Mahasiswa_1: mhs1penilaian1 || 0,
        Mahasiswa_2: mhs2penilaian1 || 0,
        Mahasiswa_3: mhs3penilaian1 || 0,
        Mahasiswa_4: mhs4penilaian1 || 0,
        Mahasiswa_5: mhs5penilaian1 || 0,
        Mahasiswa_6: mhs6penilaian1 || 0,
        Mahasiswa_7: mhs7penilaian1 || 0,
        Mahasiswa_8: mhs8penilaian1 || 0,
        Mahasiswa_9: mhs9penilaian1 || 0,
        Mahasiswa_10: mhs10penilaian1 || 0,
      },
      aspek_penilaian_2: {
        Mahasiswa_1: mhs1penilaian2 || 0,
        Mahasiswa_2: mhs2penilaian2 || 0,
        Mahasiswa_3: mhs3penilaian2 || 0,
        Mahasiswa_4: mhs4penilaian2 || 0,
        Mahasiswa_5: mhs5penilaian2 || 0,
        Mahasiswa_6: mhs6penilaian2 || 0,
        Mahasiswa_7: mhs7penilaian2 || 0,
        Mahasiswa_8: mhs8penilaian2 || 0,
        Mahasiswa_9: mhs9penilaian2 || 0,
        Mahasiswa_10: mhs10penilaian2 || 0,
      },
      aspek_penilaian_3: {
        Mahasiswa_1: mhs1penilaian3 || 0,
        Mahasiswa_2: mhs2penilaian3 || 0,
        Mahasiswa_3: mhs3penilaian3 || 0,
        Mahasiswa_4: mhs4penilaian3 || 0,
        Mahasiswa_5: mhs5penilaian3 || 0,
        Mahasiswa_6: mhs6penilaian3 || 0,
        Mahasiswa_7: mhs7penilaian3 || 0,
        Mahasiswa_8: mhs8penilaian3 || 0,
        Mahasiswa_9: mhs9penilaian3 || 0,
        Mahasiswa_10: mhs10penilaian3 || 0,
      },
      aspek_penilaian_4: {
        Mahasiswa_1: mhs1penilaian4 || 0,
        Mahasiswa_2: mhs2penilaian4 || 0,
        Mahasiswa_3: mhs3penilaian4 || 0,
        Mahasiswa_4: mhs4penilaian4 || 0,
        Mahasiswa_5: mhs5penilaian4 || 0,
        Mahasiswa_6: mhs6penilaian4 || 0,
        Mahasiswa_7: mhs7penilaian4 || 0,
        Mahasiswa_8: mhs8penilaian4 || 0,
        Mahasiswa_9: mhs9penilaian4 || 0,
        Mahasiswa_10: mhs10penilaian4 || 0,
      },
    },
  };

  var data = JSON.stringify(datapenilaian.data);

    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
      setIsShow(!isShow);
    };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mt-5 mb-4">Aplikasi Penilaian Mahasiswa</h1>

      <div className="mt-5">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Aspek Penilaian :</label>
          </div>
          <div className="form-group">
            <h6>Aspek Penilaian 1</h6>
          </div>
          <div className="form-group">
            <h6>Aspek Penilaian 2</h6>
          </div>
          <div className="form-group">
            <h6>Aspek Penilaian 3</h6>
          </div>
          <div className="form-group">
            <h6>Aspek Penilaian 4</h6>
          </div>
        </form>
      </div>
      {/* Mahasiwa 1 */}
      <div className="mt-5">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 1</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs1penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs1penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs1penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs1penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 2 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 2</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs2penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs2penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs2penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs2penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 3 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 3</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs3penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs3penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs3penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs3penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 4 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 4</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs4penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs4penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs4penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs4penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 5 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 5</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs5penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs5penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs5penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs5penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 6 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 6</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs6penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs6penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs6penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs6penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 7 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 7</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs7penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs7penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs7penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs7penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 8 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 8</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs8penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs8penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs8penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs8penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiwa 9 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 9</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs9penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs9penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs9penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs9penilaian4(e.value)}
            />
          </div>
        </form>
      </div>
      {/* Mahasiswa 10 */}
      <div className="mt-3">
        <form className="d-flex flex-row justify-content-between">
          <div className="form-group">
            <label>Mahasiswa 10</label>
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian1"
              onChange={(e) => setMhs10penilaian1(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian2"
              onChange={(e) => setMhs10penilaian2(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian3"
              onChange={(e) => setMhs10penilaian3(e.value)}
            />
          </div>
          <div className="form-group">
            <Select
              options={options}
              placeholder="Masukan Penilaian4"
              onChange={(e) => setMhs10penilaian4(e.value)}
            />
          </div>
        </form>
      </div>

      <div className="mb-5">
        <Button
          onClick={handleClick}
          className="float-right btn-lg mt-5"
          color="primary"
        >
          Simpan
        </Button>
      </div>

      {isShow && (
        <div className="mt-5">
          <h3>Hasil Perhitungan</h3>
          <div className="container mt-5">
            <JSONPretty id="json-pretty" data={data}></JSONPretty>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
