module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|mp4)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };