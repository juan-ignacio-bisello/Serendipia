
/**
 * Middleware to validate if the user has an admin role.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Object} - Returns a 403 status with an error message if the user is not an admin.
 */
const validateAdminRole = (req, res, next) => {
    
  if (!req.role || req.role !== 'authenticated-ADMIN') {
    return res.status(403).json({ msg: 'Unauthorized. Admin role required.' });
  }

  next();
};

module.exports = { validateAdminRole };
