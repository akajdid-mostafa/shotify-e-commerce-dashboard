
import React, { Fragment, useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import useHostname from '../Provider/HostnameProvider';
import ModalDetailProduct from '../Modal/ModalDetailProduct';

DataTable.use(DT);

const DataProductListTable = ({ Status, Category, Stock, data = [], info = false, paging = false, searching = false, lengthChange = false, searchTerm = "" }) => {
  const originalUrl = useHostname();

  const [selectedRows, setSelectedRows] = useState([]); // State untuk baris yang dipilih
  const [allSelected, setAllSelected] = useState(false); // State untuk checkbox Select All


  function formatAngka(angka) {
    let strAngka = angka.toString();
    if (strAngka.length > 3) {
      return "..." + strAngka.slice(-3);
    }
    return strAngka; // Jika angka kurang dari 3 digit, tidak perlu dipotong
  }
  function formatEmail(email) {
    let [username, domain] = email.split('@');
    if (domain) {
      return "..." + "@" + domain;
    }
    return email; // Jika tidak sesuai format email
  }

  const columns = [
    {
      title: '<input type="checkbox" id="select-all-checkbox" class="w-[20px] h-[20px] border !border-Mgray400 rounded-[4px]" />', // Render Select All checkbox as HTML string
      data: null,
      render: function (row) {
        return `<input type="checkbox" class="row-checkbox w-[20px] h-[20px] border !border-Mgray400 rounded-[4px]" data-id="${row.id}" />`; // Render checkbox in each row (tbody)
      },
      orderable: false,
    },
    {
      title: 'PRODUCT',
      data: 'product',
      render: function (data) {
        return `
      <div class="flex items-center gap-2">
        <img src="${data.img}" class="w-[36px] h-[36px] rounded-full object-cover" alt="" />
        <div class="">
          <h5 class="font-medium text__16">${data.title}</h5>
          <p class="text__14 text-Mtexttextsecondary">${data.subTitle}</p>
        </div>
      </div>
    `;
      },
    },
    {
      title: 'CATEGORY', data: 'category',
      render: function (data) {
        return data == "shoes" ? `<div class="inline-block px-2 py-1 rounded-[4px] bg-Msurfacesurfacesecondary border !border-Mborderborderprimary">
        <div class="flex items-center gap-2">
            <img src="${originalUrl + "/images/Sneaker.svg"}" class='w-[16px]' alt="" />
            <p class='text__14'>Shoes</p>
        </div>
    </div>`: data == "fashion" ? `<div class="inline-block px-2 py-1 rounded-[4px] bg-Msurfacesurfacesecondary border !border-Mborderborderprimary">
        <div class="flex items-center gap-2">
            <img src="${originalUrl + "/images/TShirt.svg"}" class='w-[16px]' alt="" />
            <p class='text__14'>Fashion</p>
        </div>
    </div>`
          : `<div class="inline-block px-2 py-1 rounded-[4px] bg-Msurfacesurfacesecondary border !border-Mborderborderprimary">
        <div class="flex items-center gap-2">
            <img src="${originalUrl + "/images/Devices.svg"}" class='w-[16px]' alt="" />
            <p class='text__14'>Electronic</p>
        </div>
    </div>`;
      },
    },
    {
      title: 'STOCK',
      data: 'stock',
      render: function (data) {
        return `
    <label class="switch">
  <input type="checkbox" ${data == "empty" ? "" : "checked"}>
  <span class="slider round"></span>
</label>
      `;
      },
    },
    {
      title: 'PRICE',
      data: 'price',
      render: function (data) {
        return `<p class="text__14">${data}</p>`;
      },
    },
    {
      title: 'QTY',
      data: 'qty',
      render: function (data) {
        return `<p class="text__14">${data}</p>`;
      },
    },
    {
      title: 'STATUS',
      data: 'status',
      render: function (data) {
        return data == "Scheduled" ? `<div class="text__14 text-Malertswarning px-2 py-2 inline-block rounded-[4px] border !border-[#FFF5CC] bg-[#FFFAE5]">${data}</div>` : data == "Cancel" ? `<div class="text__14 text-Malertserror px-2 py-2 inline-block rounded-[4px] border !border-[#FFEBEA] bg-[#FFEFEE]">${data}</div>` : `
        <div class="text__14 text-Malertssucces px-2 py-2 inline-block rounded-[4px] border !border-[#D6F4DE] bg-[#EFFBF2]">${data}</div>
      `;
      },
    },
    {
      title: 'ACTIONS',
      data: null,
      render: function (row) {
        return `<div class="w-full flex items-center gap-2 text-center">
        <img src="${originalUrl}/images/PencilSimpleLine.svg" class="" alt="" />
        <img src="${originalUrl}/images/Trash.svg" class="" alt="" />
        <img src="${originalUrl}/images/DotsThreeVertical.svg" class="" alt="" />
        </div>`;
      },
      orderable: false,
    },
  ];

  // Effect to sync row checkboxes with the selectedRows state
  useEffect(() => {
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');

    // Sync each checkbox with the selectedRows state
    rowCheckboxes.forEach((checkbox) => {
      const rowId = parseInt(checkbox.getAttribute('data-id'), 10);
      checkbox.checked = selectedRows.includes(rowId); // Set the checked property based on the state
    });
  }, [selectedRows]);

  useEffect(() => {
    const selectAllCheckbox = document.getElementById('select-all-checkbox');

    const handleSelectAll = () => {
      if (selectAllCheckbox.checked) {
        setSelectedRows(data.map((row) => row.id)); // Select all rows if Select All is checked
      } else {
        setSelectedRows([]); // Deselect all rows if Select All is unchecked
      }
    };

    selectAllCheckbox.addEventListener('change', handleSelectAll);

    return () => {
      selectAllCheckbox.removeEventListener('change', handleSelectAll); // Cleanup event listener
    };
  }, [data]);

  const handleRowSelect = (rowId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(rowId)
        ? prevSelected.filter((id) => id !== rowId) // Unselect row if already selected
        : [...prevSelected, rowId] // Select row if not already selected
    );
  };


  // Filtered data based on search term
  const filteredData = data.filter((item) =>
    String(item.product.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.product.subTitle).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.price).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.qty).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.status).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.category).toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(item.stock).toLowerCase().includes(searchTerm.toLowerCase())
    // String(item.status).toLowerCase().includes(String(Status).toLowerCase()) ||
    // String(item.category).toLowerCase().includes(String(Category).toLowerCase()) ||
    // String(item.stock).toLowerCase().includes(String(Stock).toLowerCase())
  );

  return (
    <Fragment>

      <div className="w-full overflow-auto">
        <div className="w-[1400px] xl:w-full">

          <div className="tableWrapCustom productList">
            <DataTable
              className='TableCustom'
              data={filteredData}
              columns={columns}
              options={{
                paging: paging,        // Disable pagination
                searching: searching,     // Disable the search bar
                info: info,          // Disable "Showing X to Y of Z entries"
                lengthChange: lengthChange,
              }}
            />
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default DataProductListTable;
