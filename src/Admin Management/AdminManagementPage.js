import React, { useState } from 'react';
import AddSubAdminModal from './AddSubAdminModal';
import EditSubAdminModal from './EditSubAdminModal';
import SubAdminTable from './SubAdminTable';
import MainMenu from '../MainMenu';

const AdminManagementPage = () => {
  const [subAdmins, setSubAdmins] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSubAdmin, setSelectedSubAdmin] = useState(null);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (subAdmin) => {
    setSelectedSubAdmin(subAdmin);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedSubAdmin(null);
    setIsEditModalOpen(false);
  };

  const addSubAdmin = (subAdmin) => {
    setSubAdmins([...subAdmins, subAdmin]);
    console.log(subAdmin)
    closeAddModal();
  };
  console.log(subAdmins)

  const editSubAdmin = (updatedSubAdmin) => {
    const index = subAdmins.findIndex((subAdmin) => subAdmin.email === updatedSubAdmin.email);
    if (index !== -1) {
      const updatedSubAdmins = [...subAdmins];
      updatedSubAdmins[index] = updatedSubAdmin;
      setSubAdmins(updatedSubAdmins);
    }
    closeEditModal();
  };


  const deleteSubAdmin = (username) => {
    const updatedSubAdmins = subAdmins.filter(
      (subAdmin) => subAdmin.username !== username
    );
    setSubAdmins(updatedSubAdmins);
  };

  return (
    <div className='container-main'>
      <div className='side-menu'>
        <MainMenu />
      </div>
      <div className='main-screen'>
        <div className='search1'>
          <h1 className='reg'>Admin Management</h1>
          <button onClick={openAddModal}>Add Sub Admin</button>
        </div>

        <SubAdminTable
          subAdmins={subAdmins}
          openEditModal={openEditModal}
          deleteSubAdmin={deleteSubAdmin}
        />

        <AddSubAdminModal
          isOpen={isAddModalOpen}
          onClose={closeAddModal}
          addSubAdmin={addSubAdmin}
        />

        {selectedSubAdmin && (
          <EditSubAdminModal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            subAdmin={selectedSubAdmin}
            editSubAdmin={editSubAdmin}
          />
        )}
      </div>
    </div>
  );
};

export default AdminManagementPage;
